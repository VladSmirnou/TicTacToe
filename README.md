View the live version of the project -> https://vladsmirnou.github.io/thinking-in-react/
\
\
or
\
\
Run via Docker -> \
1 &nbsp;&nbsp; clone the repo \
2 &nbsp;&nbsp; cd to the root of the project \
3 &nbsp;&nbsp; run ```docker image build --tag thinking-in-react .``` \
4 &nbsp;&nbsp; run ```docker container run --rm -d --log-driver none --name thinking-in-react --publish 127.0.0.1:3000:3000 thinking-in-react``` \
5 &nbsp;&nbsp; navigate to http://127.0.0.1:3000 \
6 &nbsp;&nbsp; stop the container and remove the image if you want \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \- ```docker container stop thinking-in-react``` \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \- ```docker image rm thinking-in-react``` \
\
\
Course link: https://react.dev/learn/thinking-in-react
