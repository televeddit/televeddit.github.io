## Televeddit

Televeddit is a site I hacked together in a day (expect resultant code quality). I ran into an issue where I'd be watching a TV show years after all my friends had finished it (first with Mad Men in Fall of 2019), I'd hop onto the subreddit, and I couldn't participate because of all the spoilers. My friends didn't want to talk about the shows, or couldn't without divulging secrets, so I decided to see what Reddit had to say when they were in my position (with no future knowledge).

Televeddit shows you Reddit posts from the airtime of an episode through a complete week following this.

<p align="center">
  <img src="/televeddit-recording.gif" alt="Recording of Televeddit Demo" />
</p>

This project uses APIs from [TV Maze](https://www.tvmaze.com/api) and [Pushshift](https://pushshift.io/api-parameters/). Please consider donating to those orgs if you actually use this (or even if you don't!). I've done some session storage in this app to prevent over-pinging the APIs as much as possible (and for speed purposes).

### Cases in which this probably isn't useful:
- You're watching an old show (probably won't help with your West Wing reruns). Try something that had an active subreddit through the airing of the show.
- You're watching something that comes from a streaming service. e.g. House of Cards drops entire seasons at a time, so it probably won't be helpful unless you check the last episode of each season... which could be reasonable?

### How to run locally
It should be fairly simple. This was all created with create React app and is fairly light-weight. Clone this repo and do the following...

1. `cd` into the repo directory
2. Run `npm install`
3. Run `npm start`

It should be that simple!

### Adding a subreddit

I've become aware of the fact that if I make this available to others, there's the possibility that I might need to update it with the shows _they're_ interested in. You can request an addition [here](https://github.com/bobbylcraig/cineddit/issues/new?assignees=bobbylcraig&labels=Add+Subreddit&template=subreddit-request.md&title=Add+new+subreddit) or open a PR yourself if you're feeling kind. The process should be pretty simple with a one-line diff in `src/data/ShowMapping.js`. The ID that's the value is the ID from [TV Maze](https://www.tvmaze.com/).

Note: multiple subreddits _can_ map to the same TV show. I know there are several subreddits for some TV shows.

### Contributing

Can you think of a feature that's not included that you would like to be? Please open a PR by all means! Have design ideas? I could use those too as that's definitely not my forte 😅

Lastly, if you've got accessibility feedback, I'd love it. I hacked this together relatively quickly and am sad to say that responsive design and accessibility weren't my first thoughts. I'm happy to correct issues (or review corrections) though!

### Todo
- [ ] Change React Autocomplete to React Autosuggest
- [ ] Cleanup your garbage code :)
- [ ] Add filtering/changing of order of posts
- [ ] Add photo/gif with README write-up
- [ ] Look into insecure photos loading from other sites (API suggested)
