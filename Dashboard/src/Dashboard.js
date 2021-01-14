import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import axios from 'axios';




class Dashboard extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:5001/mongodb`)
          .then(res => {
            const persons = res.data;
            console.log(persons);
          })
      }
    render() {
        return (
            <Card>
            <CardHeader title="Welcome to the administration" />
            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        </Card>
        );
      }
  }
export default Dashboard;
