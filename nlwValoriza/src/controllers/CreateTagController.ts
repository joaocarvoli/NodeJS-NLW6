import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {
  
  async handle(request: Request, response: Response) {
    const { name } = request.body; // extracting the 'name' field of request

    const createTagService = new CreateTagService(); // creating a new instance of CreateTagService

    const tag = await createTagService.execute(name); // creating the tag based on the 'name'
  
    return response.json(tag);
  }
}


export { CreateTagController };