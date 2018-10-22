# Blog

## Getting Started
1. Clone code into your workspace dir.
```bash
  $ git clone https://github.com/jardenliu/blog.git
```

2. Install dependencies by npm or yarn.
```bash
  $ npm install  # or run `$ yarn` 
```

3. fecth all article contents.
```bash
  $ npm run fetch
```

4. run dev server
```bash
  $ npm start
```

## Configuration

1. Edit the config file `config.yml` for yourself.
2. create a new file named `articles.json`. Make the configuration for your blog article, reference to `artcle-sample.json`.The params as follow:
```js
[
  {
    "name": "blog readme",  // title
    "tags": [               // tag array
      "blog"
    ],
    "categories": [         // category array
      "article"
    ],
    "type": "github",      // artcle
    "url": "https://github.com/jardenliu/blog/blob/master/README.md", // artcle url
    "setTop": true, // set article to top or not
    "reprint": true, // reprint or not
    "root": "https://github.com/jardenliu/blog/blob/master/README.md", // origin article path
    "author": "jardenliu" //author
  }
]
```
