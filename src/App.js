import React from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = React.useState('<Enter Tests to Add Here (JSON Format)>');
  const [answer, setAnswer] = React.useState('Hi!');
  const [getAnswer, setGetAnswer] = React.useState(false);
  const [addTests, setAddTests] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Manage a Test Collection';
  });

  const ask = () => {
    //if (userInput) {
      //setUserInput('');
      setGetAnswer(true);
    //}
  };

    const add = () => {
        if (userInput) {
            setAddTests(true);
        }
    };

    React.useEffect(() => {
        var submitTests = async () => {
            // Refactor code Start

            var response = null;
            try {
                setAnswer('Waiting...');

                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: userInput
                };

                response = await fetch('https://localhost:7022/ReportCard/submitTests', requestOptions);
            } catch (err) {
                console.log(err);
                setAnswer('Help! I\'m broken - failed to get a response from the desired endpoint.');
            }

            if (response != null) {
                if (response.status >= 200 && response.status <= 299) {
                    const responseText = await response.text();
                    console.log(responseText);
                    setAnswer(responseText);
                } else {
                    console.log(response.status, response.statusText);
                    setAnswer('Help! I\'m broken - received invalid response code.');
                }
            }
            // Refactor code End
        };

        if (addTests) {
            submitTests();
            setUserInput('');
            setAddTests(false);
        };

    }, [addTests]);


  React.useEffect(() => {
    var acquireAnswer = async () => {
      // Refactor code Start

        var response = null;
        try {
            setAnswer('Waiting...');
            response = await fetch('https://localhost:7022/ReportCard/getTests');
        } catch (err) {
            console.log(err);
            setAnswer('Help! I\'m broken - failed to get a response from the desired endpoint.');
        }

        if (response != null) {
            if (response.status >= 200 && response.status <= 299) {
                const responseText = await response.text();
                console.log(responseText);
                setAnswer(responseText);
            } else {
                console.log(response.status, response.statusText);
                setAnswer('Help! I\'m broken - received invalid response code.');
            }
        }
      // Refactor code End
    };

    if (getAnswer) {
        acquireAnswer();
        setUserInput('');
      setGetAnswer(false);
    };

  }, [getAnswer]);

  return (
    <div>
      <div className="question-container">
        <input
          type="text"
          value={userInput}
          onChange={(event) => { 
            setUserInput(event.target.value)
            setGetAnswer(false)
            setAnswer('Hi!')
          }}
        />
        <button onClick={add}>
          Add Tests to Collection!
        </button>
        <button onClick={ask}>
          List Tests in Collection!
        </button>
      </div>

      <div className="ball-container">
        <div className="ball-black-outer">
          <div className="ball-white-inner">
            <div>
              {(answer !== 'Hi!') ?
                answer
                :
                <div className='eight'>Hi!</div>
              }
            </div>
          </div>
        </div>
        <div className="ball-shadow"></div>
      </div>

    </div>
  );
}

export default App;
