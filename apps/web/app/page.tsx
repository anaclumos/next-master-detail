import Image from "next/image";
import { Suspense } from "react";
import Master from "../components/master.client";
import SuspensedMaster from "../components/master.server";

export default function Page() {
	return (
		<>
			<Suspense fallback={<Master mode="mobile" />}>
				<SuspensedMaster mode="mobile" />
			</Suspense>
			<div className="hidden md:block flex items-center justify-center p-24 bg-background h-screen">
				<Image
					src="/favicon.ico"
					alt="Next.js Logo"
					className="dark:invert"
					width={100}
					height={24}
					priority
				/>
			</div>
		</>
	);
}
