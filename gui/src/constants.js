// This file is modified based on the get-started example 
// from github.com/uber/streetscape.gl
// The following is the original license statement:
//
// Copyright (c) 2019 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
import {CarMesh} from 'streetscape.gl';

/* eslint-disable camelcase */

export const XVIZ_CONFIG = {
  //TIME_WINDOW: 0.2
  PLAYBACK_FRAME_RATE: 10
};

export const CONFIG_SETTINGS = {
  serverURL: {
    type: 'text',
    title: 'ServerAddr'
  },
  mapToken: {
    type: 'text',
    title: 'Map Token'
  },
  mapStyle: {
    type: 'text',
    title: 'Map Style'
  }
};

export const CAR = CarMesh.sedan({
  origin: [1.08, -0.32, 0],
  length: 4.3,
  width: 2.2,
  height: 1.5,
  color: [255, 160, 160]
});

export const APP_SETTINGS = {
  viewMode: {
    type: 'select',
    title: 'View Mode',
    data: {TOP_DOWN: 'Top Down', PERSPECTIVE: 'Perspective', DRIVER: 'Driver'}
  }
};
export const METER_WIDGET_STYLE = {
  arcRadius: 42,
  msrValue: {
    fontSize: 18,
    fontWeight: 700,
    paddingTop: 3
  },
  units: {
    fontSize: 14
  }
};
export const TURN_SIGNAL_WIDGET_STYLE = {
  wrapper: {
    padding: 0
  },
  arrow: {
    height: 16
  }
};

export const XVIZ_STYLE = {
  "/object/vehicles": [
    { name: "selected", style: { fill_color: "#ff8000aa" } }
  ],

  //'/tracklets/objects': [{name: 'selected', style: {fill_color: '#ff8000aa'}}],
  '/sensor/lidar/pointcloud': [{style: {point_color_mode: 'ELEVATION', fill_color: "#47B27588"}}]
  //'/points_raw': [{style:  {point_color_mode: 'elevation',radiusPixels: 3, fill_color: "#00a", radiusPixels: 3}}]
};

export const STYLES = {
  PERF: {fontFamily: '"Helvetica Neue",arial,sans-serif', fontSize: 12}
};
