module.exports.routes = {

    'GET /': 'HomeController.home',
    'GET /logout': 'HomeController.logout',
    'GET /auth/discord': 'AuthController.discord',
    'GET /auth/discord_cb': 'AuthController.discord_cb',
    'GET /privacy': 'HomeController.privacy',
    'GET /stickers': 'MerchController.stickers',
    'POST /stickers/order': 'MerchController.order_stickers',
    'GET /stickers/check_code/:code': 'MerchController.check_code',

    'GET /community': 'CommunityController.home',
    'GET /community/about': 'CommunityController.about',
    'GET /community/power': 'CommunityController.power',

    'GET /challenges': 'ChallengesController.home',
    'GET /challenges/choose_language/:challenge_id': 'ChallengesController.choose_language',
    'POST /challenges/execute/:challenge_id': 'ChallengesController.execute',
    'GET /challenges/:challenge_id/:language': 'ChallengesController.challenge',

    'GET /contests': 'ContestsController.home',

    'GET /snippets': 'SnippetsController.create',
    'POST /snippets': 'SnippetsController.create',
    'GET /snippets/mine': 'SnippetsController.mine',
    'GET /s/:hash': 'SnippetsController.view',

    'GET /scripts': 'ScriptsController.home',
    'GET /scripts/:cli_script_id/:slug': 'ScriptsController.view',
    'GET /exec/:cli_script_id': 'ScriptsController.exec',

    'GET /@:username': 'ProfilesController.view',
    'GET /@:username/challenges/:challenge_id/:language': 'ChallengesController.view_other',

    // piston
    'POST /api/internal/piston/execute': 'api/internal/PistonController.execute',

    // service api
    'GET /api/internal/chats/last': 'api/internal/ChatsController.last',
    'POST /api/internal/chats': 'api/internal/ChatsController.create',

    // public api endpoints
    'GET /api/v1/stats/discord/messages': 'api/v1/stats/DiscordController.messages',
    'GET /api/v1/stats/discord/channels': 'api/v1/stats/DiscordController.channels',
    'GET /api/v1/users': 'api/v1/UsersController.read_all',
    'GET /api/v1/users/:user_id': 'api/v1/UsersController.read',

    // catch all (404)
    'ALL r|^\/(?!css|cdn|images|js|lib|other|robots\.txt|google*)|': 'HomeController.fourohfour',

};
