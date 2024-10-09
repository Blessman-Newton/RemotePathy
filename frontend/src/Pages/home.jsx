const JobComponent = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-[#f8fafb] overflow-x-hidden w-screen"
      style={{ fontFamily: "'Work Sans', 'Noto Sans', sans-serif" }}
    >
      <div className="flex h-full flex-col">
        <header className="flex items-center justify-between border-b border-[#e8eef3] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e161b]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-[#0e161b] tracking-[-0.015em]">
              RemotePathy
            </h2>
          </div>
          <div className="flex justify-end flex-1 gap-8">
            <div className="flex items-center gap-9">
              <a className="text-sm font-medium text-[#0e161b]" href="#">
                For Companies
              </a>
              <a className="text-sm font-medium text-[#0e161b]" href="#">
                Blog
              </a>
            </div>
            <button
              className="min-w-[84px] h-10 px-4 bg-[#1d8cd7] text-sm font-bold text-[#f8fafb] rounded-xl"
            >
              Post a job
            </button>
            <div
              className="bg-cover bg-center rounded-full size-10"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/187f9e9f-7412-439a-aea0-5b7222035cc6.png")',
              }}
            ></div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="max-w-[960px] flex-1 flex flex-col">
            <div className="container">
              <div className="flex flex-col gap-6 px-4 py-10 flex-row">
                <div
                  className="w-full bg-cover bg-center aspect-video rounded-xl"
                  style={{
                    backgroundImage:
                      'url("https://cdn.usegalileo.ai/sdxl10/43053d08-67b9-4815-814c-38121ae1f544.png")',
                  }}
                ></div>
                <div className="flex flex-col gap-6 items-center">
                  <h1 className="text-4xl font-black text-[#0e161b] text-center">
                    Find the most qualified people in the most unexpected places.
                  </h1>
                  <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px]">
                    <div className="flex w-full h-full rounded-xl">
                      <div className="flex items-center pl-4 bg-[#e8eef3] rounded-l-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="Search for job titles, categories, or companies"
                        className="form-input flex-1 bg-[#e8eef3] text-[#0e161b] h-full px-4 rounded-r-none"
                      />
                      <button className="h-10 px-4 bg-[#1d8cd7] text-[#f8fafb] font-bold rounded-xl">
                        Search
                      </button>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <h2 className="text-[22px] font-bold text-[#0e161b] px-4 py-5">
              Featured jobs
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {[
                {
                  title: "Senior Product Designer",
                  salary: "$130k - $150k • 0.5% - 1.5%",
                  image:
                    "https://cdn.usegalileo.ai/stability/7fe780b4-ac7e-48e7-a377-518468d6f639.png",
                },
                {
                  title: "Senior Product Designer",
                  salary: "$130k - $150k • 0.5% - 1.5%",
                  image:
                    "https://cdn.usegalileo.ai/stability/7fe780b4-ac7e-48e7-a377-518468d6f639.png",
                },
                {
                  title: "Senior Product Designer",
                  salary: "$130k - $150k • 0.5% - 1.5%",
                  image:
                    "https://cdn.usegalileo.ai/stability/7fe780b4-ac7e-48e7-a377-518468d6f639.png",
                },
                {
                  title: "Senior Product Designer",
                  salary: "$130k - $150k • 0.5% - 1.5%",
                  image:
                    "https://cdn.usegalileo.ai/stability/7fe780b4-ac7e-48e7-a377-518468d6f639.png",
                },
                {
                  title: "Senior Product Designer",
                  salary: "$130k - $150k • 0.5% - 1.5%",
                  image:
                    "https://cdn.usegalileo.ai/stability/7fe780b4-ac7e-48e7-a377-518468d6f639.png",
                },
                // Add more job objects here
              ].map((job) => (
                <div key={job.title} className="flex flex-col gap-3 text-center pb-3">
                  <div className="px-4">
                    <div
                      className="bg-cover bg-center aspect-square rounded-full"
                      style={{ backgroundImage: `url("${job.image}")` }}
                    ></div>
                  </div>
                  <div>
                    <p className="text-base font-medium text-[#0e161b]">{job.title}</p>
                    <p className="text-sm text-[#507a95]">{job.salary}</p>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-[22px] font-bold text-[#0e161b] px-4 py-5">
              Top companies hiring now
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {[
                "https://cdn.usegalileo.ai/sdxl10/dc312e17-da42-40de-b748-13fa7d6b2545.png",
                "https://cdn.usegalileo.ai/sdxl10/dc312e17-da42-40de-b748-13fa7d6b2545.png",
                "https://cdn.usegalileo.ai/sdxl10/dc312e17-da42-40de-b748-13fa7d6b2545.png",
                "https://cdn.usegalileo.ai/sdxl10/dc312e17-da42-40de-b748-13fa7d6b2545.png",
                "https://cdn.usegalileo.ai/sdxl10/dc312e17-da42-40de-b748-13fa7d6b2545.png",
                "https://cdn.usegalileo.ai/sdxl10/dc312e17-da42-40de-b748-13fa7d6b2545.png",
                "https://cdn.usegalileo.ai/sdxl10/dc312e17-da42-40de-b748-13fa7d6b2545.png",
                "https://cdn.usegalileo.ai/sdxl10/dc312e17-da42-40de-b748-13fa7d6b2545.png",
                // Add more company logos here
              ].map((image, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div
                    className="bg-cover bg-center aspect-square rounded-xl"
                    style={{ backgroundImage: `url("${image}")` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobComponent;
