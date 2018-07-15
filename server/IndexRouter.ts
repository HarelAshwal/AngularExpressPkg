
import * as express from "express";
import fs = require('fs');
import tmp = require('tmp');
import cp = require("child_process");
import path = require("path");


export class IndexRouter {
    constructor(router: express.Router) {
        router.get('/Hello', this.Hello);
    }


    public Hello(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.send(true);
    }

}
