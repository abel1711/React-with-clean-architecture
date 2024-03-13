"use client";
import { People } from '@/data/people';
import { Person } from '@/models';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useState } from 'react';

export type HomeProps = {
	// types...
}

const Home: React.FC<HomeProps> = ({ }) => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
	const pageSize = 5;
	const columns: GridColDef[] = [
		{ field: 'actions', headerName: '', width: 50, renderCell: (param: GridRenderCellParams) => <>{param.value}</> },
		{ field: 'name', headerName: 'Name', flex: 1, minWidth: 150, renderCell: (param: GridRenderCellParams) => <>{param.value}</> },
		{ field: 'category', headerName: 'Category', flex: 1, minWidth: 150, renderCell: (param: GridRenderCellParams) => <>{param.value}</> },
		{ field: 'company', headerName: 'Company', flex: 1, minWidth: 150, renderCell: (param: GridRenderCellParams) => <>{param.value}</> },
	]
	return (
		<div>
			<DataGrid
				rows={People}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize,
						},
					},
				}}
				getRowId={(row) => row.id}
				pageSizeOptions={[pageSize]}
				disableColumnSelector
				disableRowSelectionOnClick
				autoHeight
			/>
		</div>
	);
};

export default Home;
