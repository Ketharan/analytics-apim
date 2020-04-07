/*
 * Copyright (c) 2018, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import { unwrap } from '@material-ui/core/test-utils';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Scrollbars } from 'react-custom-scrollbars';
import APIMFaultyPerApp from '../src/APIMFaultyPerApp';
import CustomTable from '../src/CustomTable';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });


const CommentUnwrapped = unwrap(APIMFaultyPerApp);

let wrapper;

let themeName = null;
let height = 100;
let width = 50;
let limit = 5;
let applicationList = [];
let applicationSelected = null;
let usageData = [];
let inProgress = true;
let handleLimitChange = jest.fn();
let applicationSelectedHandleChange = jest.fn();


/**
 * Initialize common properties to be passed
 * @param {*} props properies to be override
 */
function createTestProps(props) {
    return {
        themeName: themeName,
        height: height,
        width: width,
        limit: limit,
        applicationList: applicationList,
        applicationSelected: applicationSelected,
        usageData: usageData,
        inProgress: inProgress,
        applicationSelectedHandleChange: applicationSelectedHandleChange,
        handleLimitChange: handleLimitChange,
        ...props,
    };
}

const props = createTestProps();

beforeEach(() => {
    wrapper = shallow(<CommentUnwrapped {...props} />);
});

describe('<APIMFaultyPerApp /> rendering', () => {
    // snapshot testing with jest
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render 1 <Scrollbar /> s to scroll through the widget', () => {
        expect(wrapper.find(Scrollbars)).toHaveLength(1);
    });

    it('should render 2 <FormControl /> s to select the application and set the limit value', () => {
        expect(wrapper.find(FormControl)).toHaveLength(2);
    });

    it('should render 0 <CustomTable /> when there is no data available to display', () => {
        expect(wrapper.find(CustomTable)).toHaveLength(0);
    });

    it('should render 0 <Typography /> when inProgress value is set to true', () => {
        expect(wrapper.find(Typography)).toHaveLength(0);
    });

    it('should render 1 <CircularProgress /> when inProgress value is set to true', () => {
        expect(wrapper.find(CircularProgress)).toHaveLength(1);
    });

    it('should render 0; <CircularProgress /> when inProgress value is set to false', () => {
        wrapper = shallow(<CommentUnwrapped {...props} inProgress={false} />);
        expect(wrapper.find(CircularProgress)).toHaveLength(0);
    });

    it('should render 2 <Typography /> s when inProgress value is set to false', () => {
        wrapper = shallow(<CommentUnwrapped {...props} inProgress={false} />);
        expect(wrapper.find(Typography)).toHaveLength(2);
    });
});

describe('<APIMFaultyPerApp /> interactions', () => {
    it('should call the onChange function when \'Application selection\' dropdown is changed', () => {
        wrapper.find(Select).first().props().onChange();
        expect(applicationSelectedHandleChange).toHaveBeenCalledTimes(1);
    });

    it('should call the onChange function when \'Limit value selection\' dropdown is changed', () => {
        wrapper.find(Input).first().props().onChange();
        expect(handleLimitChange).toHaveBeenCalledTimes(1);
    });
});
