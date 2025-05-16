import styled, { keyframes } from 'styled-components'
import React from 'react'

const bolt = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+ICAgIDx0aXRsZT4gICAgICAgIGxpZ2h0bmluZyAgICA8L3RpdGxlPiAgICA8cGF0aCBmaWxsPSIjRjRGNEY0IiBkPSJNMTM4LjA4OSAyNTkuNDM0aDg4LjQ2YTE0LjE1MSAxNC4xNTEgMCAwIDEgMTMuODEgMTcuMjMzTDIwNS45MjMgNDMxLjAxbDE1Ni40NDMtMTkwLjQ0NWgtODguNDU5YTE0LjE1MiAxNC4xNTIgMCAwIDEtMTMuODExLTE3LjIzM2wzNC40MzctMTU0LjM0NC0xNTYuNDQ0IDE5MC40NDV6TTE3OS4xODQgNTAwYTE0LjE1IDE0LjE1IDAgMCAxLTEzLjgwNi0xNy4yMzRsNDMuNTE0LTE5NS4wM2gtMTAwLjc0YTE0LjE1MyAxNC4xNTMgMCAwIDEtMTAuOTM2LTIzLjEzM0wzMTAuMzMyIDUuMTdhMTQuMTUyIDE0LjE1MiAwIDAgMSAyNC43NDYgMTIuMDY0bC00My41MTQgMTk1LjAzaDEwMC43NDFhMTQuMTUgMTQuMTUgMCAwIDEgMTAuOTM1IDIzLjEzM0wxOTAuMTI0IDQ5NC44M2ExNC4xNDkgMTQuMTQ5IDAgMCAxLTEwLjk0IDUuMTd6Ii8+PC9zdmc+`

const bookmarkIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+ICAgIDx0aXRsZT4gICAgICAgIHNhdmVkICAgIDwvdGl0bGU+ICAgIDxwYXRoIGQ9Ik0xNDIuNDgxIDI2Ljg5N2MtMjIuMzggMC00MC41ODMgMTguMDQ2LTQwLjU4MyA0MC4yMTZ2NDAzLjc3YzAgLjU1LjAyNiAxLjAzNy4wNTMgMS40NTcuNDQ2LS4yMjMuOTQ0LS41MTIgMS40OTctLjg4bDEzOC45MjgtOTIuNjMyYTEzLjQxNiAxMy40MTYgMCAwIDEgMTQuOTIgMEwzOTYuMjUgNDcxLjQ2YTE2LjMgMTYuMyAwIDAgMCAxLjQ3Ljg2OGMuMDI3LS40Mi4wNTMtLjg5NC4wNTMtMS40NDVWNjcuMTEzYzAtMjIuMTctMTguMjAzLTQwLjIxNi00MC41ODMtNDAuMjE2SDE0Mi40OHpNOTkuOTAxIDUwMGMtMy45OTMgMC03LjgyNy0uOTE5LTExLjI5NS0yLjc4NEM3OS45NjQgNDkyLjU5MyA3NSA0ODIuOTkyIDc1IDQ3MC44ODNWNjcuMTEzQzc1IDMwLjEwMyAxMDUuMjYgMCAxNDIuNDgxIDBoMjE0LjcxYzM3LjIyIDAgNjcuNDggMzAuMTAzIDY3LjQ4IDY3LjExM3Y0MDMuNzdjMCAxMi4wOTYtNC45NjQgMjEuNjg0LTEzLjYwNiAyNi4zMDYtOC42NjggNC42NzYtMTkuNTQzIDMuNDE1LTI5LjczNS0zLjM0OWwtMTMxLjQ5NC04Ny42NTQtMTMxLjQ2OCA4Ny42NTRjLTYuMTIxIDQuMDg1LTEyLjQ3NyA2LjE2LTE4LjQ2NiA2LjE2eiIvPjwvc3ZnPg==`

// colors
const colors = {
  'kuler-primary': '#ca21fc',
  'kuler-secondary': '#a321c9',
  'kuler-shade-light': '#96989A',
  'kuler-shade-dark': '#333333',

  'kuler-text': '#96989A', // main text
  'kuler-link': '#acb7c0', // anchor tags
  'kuler-background': 'white', // background color

  'shade-light': '#96989A',
  'shade-dark': '#DBDBDB',

  // other colors
  'yellow-light-color': '#F2EFBD', // light yellow
  'yellow-dark-color': '#F2B138', // yellow
  'orange-light-color': '#fc6d21', // light orange
  'orange-dark-color': '#cd4218', // dark orange
  'red-light-color': '#F20C0C', // light red
  'red-dark-color': '#730202', // dark red
  'green-light-color': '#97ED8A', //light green
  'green-dark-color': '#45BF55', //dark green
  'pink-light-color': '#F47D7D', // light pink
  'pink-dark-color': '#D34A4A', // dark pink
  'blue-light-color': '#334D5D', // light blue
  'blue-dark-color': '#223742', // dark blue
  'brown-light-color': '#99827a', // light brown
  'brown-dark-color': '#756a66', // dark brown
}

// .flex__container {
//    display: -webkit-flex;
//    display: flex;
//    -webkit-flex-direction: row;
//    flex-direction: row;
// }

const pulse = () => {
  return keyframes`
	0% {
			transform: scale(1);
		}
		25% {
			transform: scale(1.25);
		}
		50% {
			transform: scale(1.5);
		}
		75% {
			transform: scale(1.25);
		}
		100% {
			transform: scale(1);
		}
 `
}

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-top: 7px;
  padding-bottom: 7px;
  margin-top: 7px;
  position: relative;
  justify-content: flex-end;
  align-items: center;
`

const BookmarkContainer = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  align-self: flex-end;
`

const BookmarkItem = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  top: -5px;
  right: -5px;
  border-radius: 50%;
  background-color: rgba(203, 25, 44, 1);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.23);

  cursor: pointer;
  font-size: 10px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.transition &&
    `
		animation-name: ${pulse(props)};
		animation-duration: ${props.transitionDuration}ms;
		animation-delay: ${props.transitionDelay}ms;
		animation-fill-mode: ${props.transitionFillMode};
    animation-iteration-count: ${props.transitionIterationCount};
		animation-timing-function: ease-out;
	`}
  svg > #saved > path {
    // stroke: red;
  }
`

const BookmarkIcon = styled.img`
  width: 30px;
  height: 30px;
`

const IncrementButton = styled.button`
  padding: 15px 10px;
  text-decoration: none;
  color: white;
  border: none;
  border-radius: 4px;
  display: flex;
  align-self: center;
  color: white;
  background: #cb192c;
  transition: all 0.2s ease-in-out;
  outline: none;
  border-bottom: 4px solid #af1728;
  border-radius: 2px;
  transition: background-color 250ms ease-out;
  position: absolute;
  top: 0px;
  cursor: pointer;
  &:hover {
    background: #af1728;
    cursor: pointer;
  }
  &:active {
    background: #cb192c;
    border-width: 2px;
    top: 2px;
  }

  &:focus {
    outline: 0;
  }
`

const Numbers = styled.div`
  display: flex;
  flex-direction: column;
  width: 20px;
  height: auto;
  background: black;
  justify-content: center;
  align-items: flex-start;
`

const NumberItem = styled.span`
  display: flex;
  align-self: center;
  color: white;
  padding: 5px;
  border-radius: 3px;
  font-size: 10px;

  &:nth-child(1) {
    background: red;
  }

  &:nth-child(2) {
    background: blue;
  }

  &:nth-child(3) {
    background: green;
  }
  ${(props) =>
    props.transition &&
    `
		animation-name: ${pulse(props)};
		animation-duration: ${props.transitionDuration}ms;
		animation-delay: ${props.transitionDelay}ms;
		animation-fill-mode: ${props.transitionFillMode};
    animation-iteration-count: ${props.transitionIterationCount};
		animation-timing-function: ease-out;
	`}
`

const moveNumber = (props) => {
  return keyframes`
	  from {
			top: ${(props) => props.originPosition};
		}
    to {
      top: ${(props) => props.finalPosition};
    }
  `
}

const Page = styled.div`
  padding: 15px;
  background: white;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.23);
`

const ImgPlaceholder = styled.img`
  min-width: 100%;
  ${(props) =>
    props.isIE &&
    `
    
  `};

  ${(props) =>
    !props.isRev &&
    `
		object-fit: cover;
		height: 160px;
		width: 360px;
	`};

  ${(props) =>
    props.isRev &&
    `
		object-fit: contain;
		height: 160px;
	`};
`

class BookmarkCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transition: true,
    }
    this.stopAnimating = this.stopAnimating.bind(this)
    this.startAnimating = this.startAnimating.bind(this)
  }

  componentDidMount() {
    this.transitionTimer = setTimeout(this.stopAnimating, 200)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.startAnimating()
    }
  }

  componentDidUpdate() {
    // everytime the component updates (click increment) reset / clear timeout on transition
    const { transitionDuration } = this.props
    if (this.state.transition) {
      clearTimeout(this.transitionTimer)
      this.transitionTimer = setTimeout(this.stopAnimating, transitionDuration)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.transitionTimer)
  }

  startAnimating() {
    this.setState({
      transition: true,
    })
  }

  stopAnimating() {
    this.setState({ transition: false })
  }

  render() {
    const { transition } = this.state

    const bookmark = (
      <BookmarkContainer>
        <BookmarkIcon src={bookmarkIcon} />
        <BookmarkItem
          transitionDuration={this.props.transitionDuration}
          transitionDelay={0}
          transitionFillMode={'forwards'}
          transitionIterationCount={1}
          transition={transition}
        >
          {this.props.value}
        </BookmarkItem>
      </BookmarkContainer>
    )
    return <Row>{bookmark}</Row>
  }
}

class Pulse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement() {
    this.setState(
      {
        value: this.state.value + 1,
      },
      this.checkState(),
    )
  }

  checkState() {}

  render() {
    const items = [0, 1, 2]
    const numbers = items.map((item, index) => <NumberItem>{item}</NumberItem>)

    return (
      <Container>
        <Row>
          <BookmarkCounter
            value={this.state.value}
            transitionDuration={200}
            handleIncrement={this.handleIncrement}
          />
        </Row>
        <Row>
          <IncrementButton onClick={this.handleIncrement}>
            Increment
          </IncrementButton>
        </Row>
        {this.state.show !== undefined && (
          <Row>
            <Numbers>{numbers}</Numbers>
          </Row>
        )}
      </Container>
    )
  }
}

const ImageItem = (isIE, imgLoaded, isMinimal) => (
  <ImageContainer>
    <ImgPlaceholder isIE={isIE} imgLoaded={imgLoaded} isMax={!isMinimal} />
  </ImageContainer>
)

class ObjectFit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgLoaded: false,
      isMinimal: true,
      isIE: false,
    }
    this.handleImageLoaded = this.handleImageLoaded.bind(this)
  }

  componentDidMount() {
    const version = detectIE()
    let isIE
    if (version === false) {
      isIE = false
    } else if (version >= 12) {
      isIE = true
    } else {
      isIE = true
    }
    this.setState({ isIE })
  }

  handleImageLoaded({ target: img }) {
    let isMinimal = true
    if (img.width > img.height) {
      isMinimal = false
    }
    this.setState({
      imgLoaded: true,
      isMinimal,
      dimensions: {
        height: img.width,
        width: img.height,
      },
    })
  }

  render() {
    const { isIE, imgLoaded, isMinimal } = this.state
    const { data } = this.props
    return (
      <ImageItem
        imgLoaded={imgLoaded}
        isMinimal={isMinimal}
        isIE={isIE}
        src={`${data.imageKey}`}
        alt="item"
        onLoad={this.handleImageLoaded}
      />
    )
  }
}

const Pulse = <PulseItem />
