- View the live version of the project -> https://vladsmirnou.github.io/thinking-in-react/

- Run via Docker ->
1) clone the repo
2) cd to the root of the project
3) Run ```docker image build --tag thinking-in-react .```
4) Run ```docker container run --rm -d --log-driver none --name thinking-in-react --publish 127.0.0.1:3000:3000 thinking-in-react```
5) navigate to http://127.0.0.1:3000
6) stop the container and remove the image if you want
  - ```docker container stop thinking-in-react```
  - ```docker image rm thinking-in-react```
\
\
\
Course link: https://react.dev/learn/thinking-in-react