/**
 * Created by manojdobbala on 7/4/18.
 */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardText from '@material-ui/core/CardText';


export default class ExpandableCard extends Component {

    render(){
        // pass in your data through props
        const { cardDataJSONObject } = {"card":
            [{"title":"Oat Meal", "subtitle":"blue berries","text":"This is how you make it"}, {"title":"Oat Meal", "subtitle":"blue berries","text":"This is how you make it"},
                {"title":"Oat Meal", "subtitle":"blue berries","text":"This is how you make it"}]};

        // assuming you are getting your card data in a large json object
        let cardList = [];
        Object.keys(cardDataJSONObject).forEach((cardIndex) => {
            let card = cardDataJSONObject[cardIndex];
            cardList.push (
                <Card>
                    <CardHeader
                        title={card.title}
                        subtitle={card.subtitle}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />
                    <CardText expandable={true}>
                        { card.text }
                    </CardText>
                </Card>
            )
        })

        return (
            <MuiThemeProvider>
                <div>
                    <div className='card-list'>
                        {/* here we are rendering the list of cards we build up above */}
                        { cardList }
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}