import { Request, Response } from "express";
import { ListTagService } from "../service/ListTagsService";

export class ListTagsController {
  public async handle(request: Request, response: Response) {
    const listTagsService = new ListTagService();

    const tags = await listTagsService.execute();

    return response.json(tags);
  }
}
