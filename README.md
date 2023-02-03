
<a href="https://bookmarkley.netlify.app/">
    <img alt="Bookmarkley" src="https://github.com/CleverCarpet/Bookmarkley/blob/main/icon864.png?raw=true" width="100" />
</a>

# Bookmarkley

The best bookmarklet tool to control and alter the content of a webpage.

## Installation

Install the bookmark to access Bookmarkley

### From the documentation

Vist the [Installation Instructions](https://bookmarkley.carbondev.cf/documentation#section1-1) in the documentation.

### Manually Install

Create a new bookmark and set the URL to the following script:

```bash
  javascript:(function () { var script = document.createElement('script'); script.src = 'https://bookservice.carboncdn.cf/bookmarkley.js'; document.head.appendChild(script); }())
```
    
## Features

- **Tab Cloak:** Renames the active Tab's title to a custom input.
- **Unblocker:** Unblock a blocked website but running the URL through our proxy network.
- **Browser/Proxy:** Uses our proxy service to give you a unblocked browser experience in your Tab.
- **Edit Mode:** Edit the content of any webpage without inspect tool.
- **Dev Console:** Use developer tools without the inspect tool.
- **History Flooder:** Floods the browser history with the current webpage.



## Screenshots

<img alt="Bookmarkley Screenshot" src="https://bookmarkley.carbondev.cf/src/demo-UseBmk.gif" width="400" />


## FAQ

#### Can I use custom javascript hacks?

Technically, Yes. To use custom scripts, you have to use the developer console at the moment. We are working on implementing a custom scripts access.

#### The website unblocker isn't working!

Refresh the page and try again. The proxy server is hosted were it isn't live 24/7, so it might take a few trys before the server starts.

## Roadmap

- Custom Javascript Support

- Add Games and More Tools


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## License

[MIT](https://choosealicense.com/licenses/mit/)

