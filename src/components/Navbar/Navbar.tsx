"use client";
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export type NavbarProps = {
	// types...
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
	return (
		<AppBar position="fixed">
			<Toolbar>
				{/* <IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton> */}
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					React clean
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
