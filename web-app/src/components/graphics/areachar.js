import React, { Component } from 'react'
import * as d3 from 'd3'
import store from '../../redux/store'
import { connect } from 'react-redux'

class AreaGraphics extends Component{

  constructor(props){
    super(props)
    this.state = Object.assign(store.getState(), {
      private: {
        valMax: 0,
        valMin: 0,
        valCurrent: 0
      }
    })
  }

  componentDidMount(){
    this.createSVG()
  }

  createSVG(){
    const size = {
      width: 800,
      height: 300
    }

    let svg = d3.select('#area-char').append('svg')
    svg.attr('viewBox', `0 0 ${size.width} ${size.height}`)

    const dataset = this.dataset()

    const path = svg.append('g').append('path').attr('class', 'areachar')

    const line = this.line(dataset, size)
    path.datum(dataset).attr('d', line)

  }

  line(dataset, size){
    const xScale = d3.scaleLinear().domain([0, dataset.length -1]).range([0, size.width])
    const yScale = d3.scaleLinear().domain([0, 1]).range([size.height, 0])
    return d3.line().x((d, i)=>xScale(i)).y(d=>yScale(d)).curve(d3.curveMonotoneX)
  }

  dataset(){
    let data = store.getState().areaChar.values
    if(data.length == 0){
      data = this.random()
    }
    this.setState({
      private:{
        valMax: Math.max.apply(null, data),
        valMin: Math.min.apply(null, data),
        valCurrent: data[data.length -1]
      }
    })
    return data.map(d => d / 100)
  }

  scale(data, size){
    return {
      x: d3.scaleLinear().domain([0, data.length -1]).range([0, size.width]),
      y: d3.scaleLinear().domain([0, 1]).range([size.height, 0])
    }
  }

  random(){
    let data = []
    for(let x = 0; x < 10; x++){
      data.push(Math.floor(Math.random() * 100))
    }
    return data
  }

  render(){
    return(<>
      <div className="col s4 m4 l4 center-align">
        <span>max: { this.state.private.valMax }</span>
      </div>
      <div className="col s4 m4 l4 center-align">
        <span>min: { this.state.private.valMin }</span>
      </div>
      <div className="col s4 m4 l4 center-align">
        <span>actual: { this.state.private.valCurrent }</span>
      </div>
      <div id="area-char">
		  </div>
    </>)
  }
}

export default connect(state => state)(AreaGraphics)
