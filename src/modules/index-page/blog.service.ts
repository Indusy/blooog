import { Injectable } from "@nestjs/common";
import { md2html } from "src/utils/md2html";

@Injectable()
export class BlogService {
  async mdToEjs(path: string) {
    return md2html(path);
  }

}
