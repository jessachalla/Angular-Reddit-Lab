//COMPONENT
function RedditFeed(RedditService, $q) {
    const ctrl = this;

    //List of reddit posts to display
    ctrl.feed = [];
    //1st try hard-coding the stuff from the API
    /**
     * Call https://www.reddit.com/r/aww/.json
     * and set ctrl.feed to be the results
     */

    ctrl.fetchAwwSubreddit = () => {
        console.log('fetching...')
        return $q(function (resolve) {

            //call service, then set our data
            RedditService.fetchAwwSubreddit()
                // do something with this data
                .then((response) => {
                    console.log(response);

                    let children = response.data.data.children;

                    children.forEach( function(child, index) {
                        let childObject = {
                            title: child.data.title,
                            img: child.data.thumbnail,
                            permalink: child.data.permalink
                        }


                        ctrl.feed.push(childObject);
                        if (index === (children.length - 1)) {
                        resolve();
                        }
                    });
                });
        });
    }



    // console.log('here');
    //2nd Call the function 
    ctrl.fetchAwwSubreddit()
        .then(() => {
            return;
            // alert('completed');
        })
}

angular
    .module('RedditApp')
    .component('redditFeed', {
        template: `
        <div class="center">
        <div class="container" ng-repeat="item in $ctrl.feed">
        <a href="https://www.reddit.com/{{item.permalink}}">
        <img src="{{item.img}}"/></a>
        <h4>{{item.title}}</h4>
        </div>
        </div>`,  // or use templateUrl
        controller: RedditFeed,
    });

// <a href="https://www.reddit.com/{{item.permalink}}">