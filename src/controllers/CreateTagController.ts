import { Request, Response} from 'express'
import { CreateTagsService } from '../service/CreateTagsService'

export class CreateTagController {
  async handle(request: Request, response: Response) {

    const { name } = request.body

    const createTagService = new CreateTagsService()

    const tag = await createTagService.execute(name)

    return response.status(201).json(tag)

  }
}