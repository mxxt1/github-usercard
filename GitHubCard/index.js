/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/mxxt1')
.then(response =>{
  console.log(`API Response: `,response);
});



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
//*******************GITHUB API RESPONSE****************************/
// avatar_url: "https://avatars3.githubusercontent.com/u/51805051?v=4"
// bio: "Product Marketer and Web Developer with a focus on early-stage startups and small- and mid-market businesses."
// blog: "www.altavista.com"
// company: "DustCloud Labs"
// created_at: "2019-06-13T23:28:41Z"
// email: null
// events_url: "https://api.github.com/users/mxxt1/events{/privacy}"
// followers: 25
// followers_url: "https://api.github.com/users/mxxt1/followers"
// following: 31
// following_url: "https://api.github.com/users/mxxt1/following{/other_user}"
// gists_url: "https://api.github.com/users/mxxt1/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/mxxt1"
// id: 51805051
// location: "Baltimore"
// login: "mxxt1"
// name: "Matt G"
// node_id: "MDQ6VXNlcjUxODA1MDUx"
// organizations_url: "https://api.github.com/users/mxxt1/orgs"
// public_gists: 0
// public_repos: 22
// received_events_url: "https://api.github.com/users/mxxt1/received_events"
// repos_url: "https://api.github.com/users/mxxt1/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/mxxt1/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/mxxt1/subscriptions"
// type: "User"
// updated_at: "2019-09-05T17:49:05Z"
// url: "https://api.github.com/users/mxxt1"

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
