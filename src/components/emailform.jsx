import React, {Component} from 'react';
import {Button, Box, TextField, Typography} from '@mui/material'

export default class ReactMailForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        contents: '',
        sentMail: false,

    }
  }

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleContentsChange = e => {
    this.setState({ contents: e.target.value });
  };

  render() {
    const {
      className = '',
      titleMaxLength = 50,
      titlePlaceholder = 'Title...',
      contentsRows = 8,
      contentsMaxLength = 500,
      contentsPlaceholder = 'Message...',
      buttonText = 'Send E-Mail',
    } = this.props;

    if (this.state.sentMail) {
        return (
            <Box className={className}>
                <p>
                    Thank you for the message!
                </p>
                <Button
                    variant="outlined"
                    onClick={() => this.setState({ sentMail: false })}
                >
                    Send Another Message
                </Button>
            </Box>
        );
    } else {
        return (
            <Box>
                <Box
                    component="form"
                    sx={{
                    '& > :not(style)': {width: '50%', paddingTop:'30px'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        type="email"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        maxLength={Number(titleMaxLength)}
                        placeholder={titlePlaceholder}
                    />
                    <br/>
                    <TextField
                        value={this.state.contents}
                        onChange={this.handleContentsChange}
                        rows={Number(contentsRows)}
                        maxLength={Number(contentsMaxLength)}
                        placeholder={contentsPlaceholder}
                        multiline={true}
                        minRows={3}
                    />
                    <br/>
                    <br/>
                </Box>
                <Button
                    variant="contained"
                    onClick={() => {
                        window.location.href = `mailto:ryan.nguyen@uwaterloo.ca?subject=${this.state.title}&body=${this.state.contents}`;
                        this.setState({ sentMail: true });
                    }}
                    color="secondary"
                    sx={{width:'200px', height:'50px'}}
                >
                    <Typography variant="h7" >{buttonText}</Typography>
                </Button>
                <Typography variant="h5" sx={{paddingTop:'25px'}}>
                Note: will open a new window in your preferred email application to send the message.
                </Typography>
            </Box>
        );
    }
  }
}