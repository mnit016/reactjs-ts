import QuizzAppBar from './app-bar';
import WellComePage from './wellcome-page';
import Quizz from './quizz-page';
import { Switch, Route } from 'react-router';
import UnauthorisedPage from './unauthorised-page';
import NotFoundPage from './not-found-page';
import QuizzResult from './result-page';

export default function Home() {
    return (
        <div className="home">
            <QuizzAppBar/>
            <Switch>
                <Route exact path="/" component={WellComePage}/>
                <Route exact path="/quizz" component={Quizz}/>
                <Route exact path="/result" component={QuizzResult}/>
                <Route exact path="/403" component={UnauthorisedPage}/>
                <Route path="/" component={NotFoundPage}/>
            </Switch>
        </div>
    );
} 