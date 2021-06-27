import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../service/ListUserSendComplimentsService";

export class ListUserSendComplimentsControllers {
  public async handle(request: Request, response: Response) {
    const listUserSendComplimentsService = new ListUserSendComplimentsService();
    const { user_id } = request;

    const compliments = await listUserSendComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}
