import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
// import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const role = this.reflector.get<String[]>("role", context.getHandler());
    const req = context.switchToHttp().getRequest();
    if (!role) return true;
    if (role.includes(req.role)) return true;
    return false;
  }
}
