import React, { Component } from "react";
import New_item_seasons from "./new_item_seasons";
import { connect } from "react-redux";

class New_seasons extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // console.log("this.props at new season", this.props);

        return (
            <div className="resultsContainer">
                {this.props.loading && (
                    <h1 className="noResults">Loading results...</h1>
                )}

                {this.props.noResults && (
                    <h1 className="noResults">
                        No results for the selected dates!
                    </h1>
                )}
                {!!this.props.dataNew &&
                    this.props.dataNew.map(newItem => (
                        <New_item_seasons
                            key={newItem.imbdid}
                            netflixid={newItem.netflixid}
                            poster={newItem.poster}
                            title={newItem.title}
                            total_seasons={newItem.total_seasons}
                            runtime={newItem.runtime}
                            genre={newItem.genre}
                            country={newItem.country}
                            year={newItem.year}
                            imdb_rating={newItem.imdb_rating}
                            plot={newItem.plot}
                            actors={newItem.actors}
                            language={newItem.language}
                        />
                    ))}
            </div>
        );
    }
}

export default New_seasons;
