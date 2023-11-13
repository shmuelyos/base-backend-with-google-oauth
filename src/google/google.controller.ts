import {BadRequestException, Controller, Get, Req, Res, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';

@Controller("google")
export class GoogleController {

    @Get()
    @UseGuards(AuthGuard('google'))
    googleAuth() {
    }

    @Get("redirect")
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req, @Res() res) {
        try {
            if (!req?.user?.email) {

                const detailedErrorMessage = `Authentication succeeded but no user information could be retrieved. ` +
                    `Expected user object was not present in the request. This could indicate ` +
                    `a problem with the Google authentication strategy configuration.`;
                // Log the detailed error message internally
                console.error(detailedErrorMessage);

                // Throw an exception with a user-friendly error message
                const userErrorMessage = 'The authentication process did not return the expected user information. ' +
                    'Please try signing in again, and if the problem persists, contact our support team.';
                throw new BadRequestException(userErrorMessage);
            }

            req.session.email = req.user.email;
            res.redirect(process.env.FRONTEND_URL);
        } catch (error) {
            res.redirect(`${process.env.FRONTEND_URL}/error`);

        }
    }
}
