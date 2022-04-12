# covid-server

COVID server is a server that fetches data from the specific API interface that provide those data and store them to your desire database.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Clone or download this repository locally and then use the package manager [npm](https://nodejs.org) to install the [package.json](package.json)

```bash
npm i
```

## Usage
The server currently fetches the data from the third-party api interfaces, display and stores them to the database. But I am implementing ways for the server to fetch the data and store to the database first, then display those data.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
- Currently, working on storing the data from the fetched endpoints to the database and display them to those api endpoints.
- In the future, this server will use a package [Node Scheduler](https://www.npmjs.com/package/node-schedule) to fetch the data from the third party endpoints and store them in the database.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
- [Leon Xu](https://gitlab.com/LeonXu260)

Special thanks for the help from:
- [Wong Chi Sum](https://github.com/wongshisum)

Special thanks to those Third-party API interface providers:
- [TianAPI 抗击疫情](https://www.tianapi.com/apiview/169)
- [TianAPI 海外疫情](https://www.tianapi.com/apiview/176)
- [Wapi挖数据 全国疫情数据](https://www.wapi.cn/api_detail/94/219.html)
- [Wapi挖数据 国外疫情数据](https://www.wapi.cn/api_detail/94/220.html)
- [Wapi挖数据 国内城市疫情数据](https://www.wapi.cn/api_detail/94/221.html)
- [Wapi挖数据 全球疫情数据](https://www.wapi.cn/api_detail/94/222.html)

## License
For open source projects, say how it is licensed.

## Project status
This project is currently under development. 
