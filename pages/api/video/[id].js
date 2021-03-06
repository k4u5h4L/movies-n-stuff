import fs from "fs";
import prisma from "../../../prisma/client";

// is you're using next.js 10.0.7, webpack versions sometimes don't work
// "webpack": "4.44.1"

/*
// old code
export default async (req, res) => {
    const { id } = req.query;

    const movie = await prisma.movie.findFirst({ where: { id: parseInt(id) } });

    try {
        const range = req.headers.range;
        if (!range) {
            res.status(400).send("Requires Range header");
            return;
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
*/

export default async (req, res) => {
    const { id } = req.query;

    const movie = await prisma.movie.findFirst({ where: { id: parseInt(id) } });
    const path = movie.vidSource;
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;
    if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const file = fs.createReadStream(path, { start, end });
        const head = {
            "Content-Range": `bytes ${start}-${end}/${fileSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": chunksize,
            "Content-Type": "video/mp4",
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        const head = {
            "Content-Length": fileSize,
            "Content-Type": "video/mp4",
        };
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }
};
