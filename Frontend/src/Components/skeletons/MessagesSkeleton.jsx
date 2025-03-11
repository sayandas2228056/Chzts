import React from "react";

const MessagesSkeleton = () => {
  const skeletonMessages = Array(5).fill(null);

  return (
    <div className="space-y-4">
      {skeletonMessages.map((_, idx) => (
        <div key={idx} className="flex gap-3">
          <div className="skeleton size-10 rounded-full" />
          <div className="flex-1">
            <div className="skeleton h-4 w-32 mb-2" />
            <div className="skeleton h-3 w-48" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesSkeleton;