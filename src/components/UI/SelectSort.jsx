import React from 'react';

export default function SelectSort({ options, defaultValue, onChange }) {
    return (
        <select
            data-test-id="filter-duration"
            name="duration"
            onChange={onChange}>
            <option value="">{defaultValue}</option>
            {options.map(options =>
                <option value={options.value}>{options.name}</option>
            )}
        </select>
    );
}
