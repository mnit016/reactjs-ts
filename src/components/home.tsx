import QuizzAppBar from './app-bar';
import WellComePage from './wellcome-page';
import Quizz from './quizz-page';
import { Switch, Route } from 'react-router';

export default function Home() {
    return (
        <div className="home">
            <QuizzAppBar/>
            <Switch>
                <Route exact path="/">
                    <WellComePage/>
                </Route>
                <Route exact path="/quizz">
                    <Quizz/>
                </Route>
            </Switch>
        </div>
    );
} 