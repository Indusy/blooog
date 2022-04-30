import { Controller, Get, Param, Render} from "@nestjs/common";
// import { Request, Response } from "express";
// import { Readable } from "stream";
// import { render } from "ssr-core-react";
// import { ApiService } from "./index.service";
import { BlogService } from "./blog.service";
import path = require("path");
const USER_HOME = process.env.HOME || process.env.USERPROFILE;
const insPath = path.resolve(USER_HOME, ".local/share/blooog");

@Controller("/")
export class AppController {
  constructor(
    // private readonly apiService: ApiService,
    private readonly blogService: BlogService
  ) {}

  // @Get("/")
  // async handlerIndex(@Req() req: Request, @Res() res: Response): Promise<any> {
  //   try {
  //     const ctx = {
  //       request: req,
  //       response: res,
  //       apiService: this.apiService,
  //     };
  //     const stream = await render<Readable>(ctx, {
  //       stream: true,
  //     });
  //     stream.pipe(res, { end: false });
  //     stream.on("end", () => {
  //       res.end();
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).send(error);
  //   }
  // }

  @Get("/")
  @Render("index.ejs")
  async renderIndex() {
    const opts = {
      title: "114514",
      subtitle: "1919810",
      theme: {
        background: "https://cdn.lixingyong.com/2020/12/25/Konachan.com---201218-animal-blonde-hair-dango-remi-drink-frog-green-eyes-green-hair-hat-kochiya-sanae-long-hair-navel-short-hair-skirt-socks-thighhighs-touhouad0a02a2bf14d9b9f220a8d22f543a30.jpg"
      }
    };
    return opts;
  }

  @Get("/archives")
  @Render("archives.ejs")
  async renderArchives() {
    const opts = {
      title: "114514",
      subtitle: "1919810",
    };
    return opts;
  }

  @Get("/archives/:doc")
  @Render("post.ejs")
  async renderArticle(@Param("doc") doc: string) {
    const opts = {
      title: "114514",
      subtitle: "1919810",
      content: await this.blogService.mdToEjs(
        path.resolve(insPath, `_posts/${doc}.md`)
      ),
    };
    return opts;
  }

  @Get("/categories/:cat")
  @Render("post.ejs")
  async renderCategories(@Param("cat") cat: string) {
    const opts = {
      title: "114514",
      subtitle: "1919810",
      
    };
    return opts;
  }

  @Get("/links")
  @Render("links.ejs")
  async renderLinks() {
    const opts = {
      title: "贵物博客",
      subtitle: "友情链接",
      links: [
        {
          host: "炎忍大佬",
          link: "https://blog.imyan.ren",
          desc: "炎忍大佬喜欢女装"
        },
        {
          host: "丁二大佬",
          link: "https://blog.butanediol.me",
          desc: "炎忍大佬喜欢小男孩"
        }
      ],
    };
    return opts;
  }
}
