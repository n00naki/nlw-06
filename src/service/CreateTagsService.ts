import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

export class CreateTagsService {

  public async execute(name: string){

    if(!name) throw new Error('Incorrect name!')
    
    const tagsRepositorie = getCustomRepository(TagsRepositories)

    const tagAlreadyExists = await tagsRepositorie.findOne({ name })


    if(tagAlreadyExists) throw new Error('Tag aready exists!')

    const tag = tagsRepositorie.create({
      name
    })

    await tagsRepositorie.save(tag)

    return tag

  }
}