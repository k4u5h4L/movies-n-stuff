import fs from "fs";
import prisma from "../../../prisma/client";

// "webpack": "4.44.1"

export default async (req, res) => {
    const { id } = req.query;

    const movie = await prisma.movie.findFirst({ where: { id: parseInt(id) } });
    // console.log(movie);

    try {
        const range = req.headers.range;
        if (!range) {
            res.status(400).send("Requires Range header");
        }

        // get video stats (about 61MB)
        const videoPath = movie.vidSource;
        const videoSize = fs.statSync(videoPath).size;

        // Parse Range
        // Example: "bytes=32324-"
        const CHUNK_SIZE = 10 ** 6; // 1MB
        const start = Number(range.replace(/\D/g, ""));
        const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

        // Create headers
        const contentLength = end - start + 1;
        const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "video/mp4",
        };

        // HTTP Status 206 for Partial Content
        res.writeHead(206, headers);

        // create video read stream for this particular chunk
        const videoStream = fs.createReadStream(videoPath, { start, end });

        // Stream the video chunk to the client
        videoStream.pipe(res);
    } catch (err) {
        console.error(err);
        res.status(400).send("Error");
    }
};
