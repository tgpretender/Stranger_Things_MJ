const NewMessage = (props) => {
    const { baseURL, userName, isAuthenticated, userToken} = props;
    const [ postMessage, setPostMessage ] = useState(" ");
 


         const sendMessage = () => {
            fetch(`${baseURL}/posts/POST_ID/messages`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${userToken}`
                },
                body: JSON.stringify({
                  message: {
                    content: postMessage
                  }
                })
              }).then(response => response.json())
                .then(result => {
                  console.log(result);
                })
                .catch(console.error);
            }
          }