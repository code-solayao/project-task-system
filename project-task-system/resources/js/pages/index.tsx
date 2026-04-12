import { Link } from '@inertiajs/react';
import { signup } from '@/routes';

export default function Index() {
    return (
        <div className="relative min-h-screen flex justify-center items-baseline bg-mist-900">
            <div className="absolute flex flex-col items-center my-12 space-y-12">
                <div className="border-4 border-blue-900 rounded-xl text-center px-4 bg-blue-500">
                    <span className="text-blue-200 font-bold text-lg leading-24">Project Task Management System</span>
                </div>
                <div className="flex flex-col items-center space-y-5">
                    <button className="btn-home">
                        <span className="text-blue-200 font-medium text-xl">Log In</span>
                    </button>
                    <Link href={signup()}>
                        <button className="btn-home bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800">
                            <span className="text-blue-200 font-medium text-xl">Sign Up</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}