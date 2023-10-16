import { User2 } from "@/interface/login";
import "next-auth";
import { User } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            user: User2 | User;
            token: string;
        }
    }
}