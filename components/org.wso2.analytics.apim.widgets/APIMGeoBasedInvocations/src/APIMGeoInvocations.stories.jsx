import React from 'react';
import APIMGeoInvocations from './APIMGeoInvocations';

export default { title: 'APIMGeoInvocations' };

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
const inProgress = false;

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
        ...props,
    };
}

const props = createTestProps();

export const blankWidgetWithLightTheme = () => <APIMGeoInvocations {...props} themeName='' />;

export const blankWidgetWithDarkTheme = () => <APIMGeoInvocations {...props} themeName='dark' />;

export const WidgetWithData = () => (
    <APIMGeoInvocations
        {...props}
        geoData={[[63, 'China'], [61, 'United States'], [6, 'N/A']]}
    />
);
