import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../service/ListUserReceiveComplimentsService";

export class ListUserReceiveComplimentsControllers {
  public async handle(request: Request, response: Response) {
    const listUserSendComplimentsService =
      new ListUserReceiveComplimentsService();
    const { user_id } = request;

    const compliments = await listUserSendComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}
