//SERVICE
function RedditService(http) {
    const service = this;

    /**
    * Call https://www.reddit.com/r/aww/.json
    * and set ctrl.feed to be the results
    */
    service.fetchAwwSubreddit = () => {
    // $http stuff goes here
    console.log('fetching from service');
    
    //this will return a promise handled inside the component (redditfeed)
    return http.get('https://www.reddit.com/r/aww/.json')
    }

}

angular
.module('RedditApp')
.service('RedditService', ['$http', RedditService])
// passing $http service as dependcy for our service

//SERVICE