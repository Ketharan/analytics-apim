import initStoryshots from '@storybook/addon-storyshots';
import path from 'path';
import Enzyme, { shallow } from 'enzyme';
import { Scrollbars } from 'react-custom-scrollbars';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '@material-ui/core/Select';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { unwrap } from '@material-ui/core/test-utils';
import APIMGeoInvocations from './APIMGeoInvocations';


// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

const CommentUnwrapped = unwrap(APIMGeoInvocations);

let wrapper;

const themeName = 'dark';
const chartConfig = {
    x: 'Country',
    charts: [
        {
            type: 'map',
            y: 'count',
            mapType: 'world',
            colorScale: [
                '#1565C0',
                '#4DB6AC',
            ],
        },
    ],
    chloropethRangeUpperbound: [20],
    chloropethRangeLowerbound: [0],
};
const metadata = {
    names: ['count', 'Country'],
    types: ['linear', 'ordinal'],
};

const height = 700;
const width = 200;
const apiCreatedBy = null;
const apiSelected = null;
const apiVersion = null;
const geoData = null;
const apilist = [];
const versionlist = [];
const inProgress = true;
const apiCreatedHandleChange = jest.fn();
const apiSelectedHandleChange = jest.fn();
const apiVersionHandleChange = jest.fn();

/**
 * Initialize common properties to be passed
 * @param {*} props properies to be override
 */
function createTestProps(props) {
    return {
        themeName,
        chartConfig,
        metadata,
        height,
        width,
        apiCreatedBy,
        apiSelected,
        apiVersion,
        geoData,
        apilist,
        versionlist,
        inProgress,
        apiCreatedHandleChange,
        apiSelectedHandleChange,
        apiVersionHandleChange,
        ...props,
    };
}

const props = createTestProps();

// snapshot testing using storybook add-on, snapshot test will be executed for all stories
initStoryshots({ configPath: path.resolve(__dirname, '../.storybook') });

beforeEach(() => {
    wrapper = shallow(<CommentUnwrapped {...props} />);
});

describe('<APIMGeoInvocations /> rendering', () => {
    it('should render 1 <Scrollbar /> s to scroll through the widget', () => {
        expect(wrapper.find(Scrollbars)).toHaveLength(1);
    });

    it('should render 3 <FormControl /> s to select the api creator, api name and api version', () => {
        expect(wrapper.find(FormControl)).toHaveLength(3);
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

describe('<APIMGeoInvocations /> interactions', () => {
    it('should call the onChange function when \'api creator selection\' dropdown is changed', () => {
        wrapper.find(Select).first().props().onChange();
        expect(apiCreatedHandleChange).toHaveBeenCalledTimes(1);
    });

    it('should call the onChange function when \'api selection\' dropdown is changed', () => {
        wrapper.find(Select).at(1).props().onChange();
        expect(apiSelectedHandleChange).toHaveBeenCalledTimes(1);
    });

    it('should call the onChange function when \'api version selection\' dropdown is changed', () => {
        wrapper.find(Select).last().props().onChange();
        expect(apiVersionHandleChange).toHaveBeenCalledTimes(1);
    });
});
