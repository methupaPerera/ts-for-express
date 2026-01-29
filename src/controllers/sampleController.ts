import type { Request, Response } from "express";

const sampleController = (req: Request, res: Response) => {
    res.send("<h1>From Sample Controller...</h1>");
};

export default sampleController;
