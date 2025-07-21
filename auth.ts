import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { createNewUser, getExistingUserUser } from "./lib/api";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async signIn(profile){
            try{
                const email = profile.user.email;
                const first_name = (profile as any).given_name ?? "";
                const last_name = (profile as any).family_name ?? "";
                const username = profile.user.name;
                const profile_picture_url = (profile as any).picture ?? "";
                const userObj = {
                                email: email ?? "",
                                first_name: first_name ?? "",
                                last_name: last_name ?? "",
                                username: username ?? "", 
                                profile_picture_url: profile_picture_url ?? "",
                                };

                try{
                    await getExistingUserUser(email)
                }

                catch(err){
                    await createNewUser(userObj);
                    
                }

                return true
            }
            catch(err:unknown){
                return false
            }
        }
    },
})