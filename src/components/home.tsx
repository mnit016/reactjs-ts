import QuizzAppBar from './app-bar';
import Quizz from './quizz-page';
import { Switch, Route } from 'react-router';
import UnauthorisedPage from './unauthorised-page';
import NotFoundPage from './not-found-page';
import ResulHistory from './result-page';
import { LoggedInWellCome, NotLogInWellCome } from './wellcome-page';

export default function Home() {
    return (
        <div className="home">
            <QuizzAppBar/>
            <Switch>
                <Route exact path="/" component={NotLogInWellCome}/>
                <Route exact path="/home" component={LoggedInWellCome}/>
                <Route exact path="/quizz" component={Quizz}/>
                <Route exact path="/result" component={ResulHistory}/>
                <Route exact path="/403" component={UnauthorisedPage}/>
                <Route path="/" component={NotFoundPage}/>
            </Switch>
        </div>
    );
} 