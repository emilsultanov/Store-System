import React, { memo } from "react";

function Layout({ children }) {
	return <>{children}</>;
}

export default memo(Layout);
