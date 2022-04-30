import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express'
import { Readable } from 'stream'
import { render } from 'ssr-core-react'
// import { RoleGuard } from '@/guards/role.guard';
// import { Role } from '@/decorators/role.decorator';
// import { Roles } from '@/interfaces/role.enum';
import { AuthGuard } from '@nestjs/passport';


@Controller('/admin')
export class AdminController {
  constructor() {}
  // @UseGuards(RoleGuard)
  @UseGuards(AuthGuard("jwt"))
  // @Role(Roles.ADMIN)
  @Get("/")
  async index(@Req() req: Request, @Res() res: Response): Promise<any> {
    
    try {
      const ctx = {
        request: req,
        response: res,
      }
      const stream = await render<Readable>(ctx, {
        stream: true
      })
      stream.pipe(res, { end: false })
      stream.on('end', () => {
        res.end()
      })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
  @UseGuards(AuthGuard("local"))
  @Get("/login")
  async login(@Req() req: Request, @Res() res: Response): Promise<any> {
    try {
      const ctx = {
        request: req,
        response: res,
      }
      const stream = await render<Readable>(ctx, {
        stream: true
      })
      stream.pipe(res, { end: false })
      stream.on('end', () => {
        res.end()
      })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }

  @Get("/install")
  async install(@Req() req: Request, @Res() res: Response): Promise<any> {
    try {
      const ctx = {
        request: req,
        response: res,
      }
      const stream = await render<Readable>(ctx, {
        stream: true
      })
      stream.pipe(res, { end: false })
      stream.on('end', () => {
        res.end()
      })
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}
