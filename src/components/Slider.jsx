import React, { Component } from "react";
import css from "../scss/style.scss";

import sliderData from "../data.json";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: sliderData.images,
            sliderSettings: sliderData.settings,
            activeSlideCount: 1,
            coverageHeight: 1
        };
        this.sliderLeft = this.sliderLeft.bind(this);
        this.sliderRight = this.sliderRight.bind(this);
        this.paginationClick = this.paginationClick.bind(this);
    }

    componentWillMount() {
        let coverageHeight = this.props.coverage + "vh";
        this.setState({
            coverageHeight: coverageHeight
        });
    }

    sliderLeft() {
        let count =
            this.state.activeSlideCount > 1
                ? this.state.activeSlideCount - 1
                : this.state.activeSlideCount;
        this.setState({
            activeSlideCount: count
        });
    }

    sliderRight() {
        let count =
            this.state.activeSlideCount == this.state.slider.length
                ? this.state.activeSlideCount
                : this.state.activeSlideCount + 1;
        this.setState({
            activeSlideCount: count
        });
    }

    paginationClick(num) {
        this.setState({
            activeSlideCount: num
        });
    }

    render() {
        console.log(this.state.coverageHeight);
        let displayHeight = { height: this.state.coverageHeight };
        return (
            <div className="fullWidth relativePositioned" style={displayHeight}>
                <div className="sliderContainer fullHeight">
                    <div className="sliderContainerBlock">
                        {this.state.slider.map(item => (
                            <div
                                className="sliderItem fullHeight horizontalSlide"
                                key={`${item.id}`}
                                style={{
                                    left:
                                        `${-this.state.activeSlideCount +
                                            item.id}` *
                                            `100` +
                                        `vw`
                                }}
                            >
                                <div
                                    className="sliderImage fullHeight"
                                    style={{
                                        backgroundImage:
                                            "url(" + `${item.imageUrl}` + ")",
                                        backgroundPosition: "center center"
                                    }}
                                >
                                    &nbsp;
                                </div>
                                <div className="sliderText fullHeight">
                                    <div
                                        className="sliderTextBlock"
                                        style={{
                                            textAlign: `${this.state.sliderSettings.descriptionTextAlignment}`
                                        }}
                                    >
                                        <p>
                                            <span className="bgColor">{`${item.imageDescription}`}</span>
                                        </p>
                                        <h1>
                                            <span className="bgColor">{`${item.imageHeading}`}</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {this.state.sliderSettings.showPagination ? (
                    <div className="sliderPagination paginationGradient">
                        <ul>
                            {this.state.slider.map(item => (
                                <li key={`${item.id}`} id={item.id}>
                                    <a
                                        href="#"
                                        onClick={() =>
                                            this.paginationClick(item.id)
                                        }
                                        className={
                                            this.state.activeSlideCount ===
                                            item.id
                                                ? `active`
                                                : ``
                                        }
                                    >
                                        &nbsp;
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    ""
                )}
                {this.state.sliderSettings.showArrows ? (
                    <div className="sliderArrows">
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    title="Previous Slide"
                                    onClick={this.sliderLeft}
                                >
                                    &nbsp;
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    title="Next Slide"
                                    onClick={this.sliderRight}
                                >
                                    &nbsp;
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default Slider;
