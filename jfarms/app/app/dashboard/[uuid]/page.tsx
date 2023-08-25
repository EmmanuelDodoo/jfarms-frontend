// "use client";

type pageParams = {
  params: {
    uuid: string;
  };
};

export default function PersonalDashboard({ params }: pageParams) {
  return (
    <div className="flex justify-center items-center ">
      Testing Dashboard for uuid:{params.uuid}
    </div>
  );
}
