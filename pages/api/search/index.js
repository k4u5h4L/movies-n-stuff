import prisma from "../../../prisma/client";

export default async (req, res) => {
    if (req.method === "POST") {
        const query = req.body;

        const movies = await prisma.movie.findMany({
            where: {
                name: {
                    contains: query,
                },
            },
        });
        res.status(200).json({ movies: movies });
    } else {
        res.status(200).json({ message: "method not allowed" });
    }
};
