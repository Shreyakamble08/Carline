// Machines Data
const machinesData = [
    {
        id: 1,
        srNo: 1,
        name: "Hydraulic Press",
        make: "LVD",
        model: "PPN 300T",
        capacity: "300 Ton",
        specifications: "Programmable, CNC Controlled",
        location: "Press Shop - Bay 1",
        image: "/Img/hydraulic-press-machine-500x500.webp",
        isCritical: true,
        description: "High-capacity 300-ton hydraulic press for heavy-duty metal forming and stamping operations. Features programmable controls and precision pressure management."
    },
    {
        id: 2,
        srNo: 2,
        name: "Rotary Welding SPM",
        make: "Esab",
        model: "RWS-250",
        capacity: "250 kg",
        specifications: "4-Station Rotary, MIG/TIG",
        location: "Welding Section - Bay 3",
        image: "/Img/rotary-welding-spm.jpeg",
        isCritical: true,
        description: "Special Purpose Machine with 4-station rotary table for high-volume welding operations. Capable of both MIG and TIG welding processes."
    },
    {
        id: 3,
        srNo: 3,
        name: "Powder Coating Booth",
        make: "Wagner",
        model: "PCB-1200",
        capacity: "1200x800x600 mm",
        specifications: "Automatic Spray, Curing Oven",
        location: "Finishing Section - Bay 5",
        image: "/Img/product-jpeg.jpg",
        isCritical: true,
        description: "Complete powder coating system with automatic spray guns, recovery system, and integrated curing oven for superior surface finishing."
    },
    {
        id: 4,
        srNo: 4,
        name: "CNC Laser Cutter",
        make: "Bystronic",
        model: "BySprint Fiber 3015",
        capacity: "3000x1500 mm",
        specifications: "3kW Fiber Laser",
        location: "Cutting Section - Bay 2",
        image: "./Img/machines/laser-cutter.jpg",
        isCritical: false,
        description: "High-precision fiber laser cutting machine capable of cutting various metals with exceptional accuracy and edge quality."
    },
    {
        id: 5,
        srNo: 5,
        name: "CNC Turret Punch",
        make: "Amada",
        model: "VIPROS 358",
        capacity: "30 Station Turret",
        specifications: "35 Ton, 1250mm Bed",
        location: "Punching Section - Bay 2",
        image: "./Img/machines/turret-punch.jpg",
        isCritical: false,
        description: "High-speed turret punch press with 30-station tool capacity for efficient sheet metal punching operations."
    },
    {
        id: 6,
        srNo: 6,
        name: "Press Brake",
        make: "TRUMPF",
        model: "TruBend 5130",
        capacity: "130 Ton",
        specifications: "6-Axis CNC Back Gauge",
        location: "Bending Section - Bay 4",
        image: "./Img/machines/press-brake.jpg",
        isCritical: false,
        description: "CNC-controlled press brake with 6-axis back gauge for precise bending and forming of sheet metal components."
    },
    {
        id: 7,
        srNo: 7,
        name: "Shearing Machine",
        make: "Cincinnati",
        model: "CMS-2500",
        capacity: "2500 mm",
        specifications: "Hydraulic, 6mm Capacity",
        location: "Cutting Section - Bay 2",
        image: "./Img/machines/shearing-machine.jpg",
        isCritical: false,
        description: "Heavy-duty hydraulic shearing machine for cutting sheet metal up to 6mm thickness and 2500mm width."
    },
    {
        id: 8,
        srNo: 8,
        name: "Spot Welding Machine",
        make: "RMC",
        model: "SW-150",
        capacity: "150 kVA",
        specifications: "Pneumatic, Timer Control",
        location: "Welding Section - Bay 3",
        image: "./Img/machines/spot-welding.jpg",
        isCritical: false,
        description: "Pneumatic spot welding machine with timer control for consistent weld quality in sheet metal fabrication."
    },
    {
        id: 9,
        srNo: 9,
        name: "Surface Grinder",
        make: "Okamoto",
        model: "PSG-125DX",
        capacity: "300x600 mm",
        specifications: "Precision Grinding",
        location: "Tool Room - Bay 6",
        image: "./Img/machines/surface-grinder.jpg",
        isCritical: false,
        description: "Precision surface grinding machine for tool room applications requiring high accuracy and fine surface finish."
    },
    {
        id: 10,
        srNo: 10,
        name: "CMM Machine",
        make: "Mitutoyo",
        model: "Crysta-Apex S 121210",
        capacity: "1200x1200x1000 mm",
        specifications: "3D Measurement",
        location: "Quality Lab - Bay 7",
        image: "./Img/machines/cmm-machine.jpg",
        isCritical: false,
        description: "Coordinate Measuring Machine for high-precision 3D measurement and inspection of complex components."
    }
];

// Initialize Machines Page
function initializeMachinesPage() {
    populateMachinesTable();
    populateCriticalMachines();
    addEventListeners();
}

// Populate Machines Table
function populateMachinesTable() {
    const tableBody = document.getElementById('machines-table-body');
    
    if (!tableBody) return;
    
    tableBody.innerHTML = machinesData.map(machine => `
        <tr class="table-row-hover table-row-animate" data-machine-id="${machine.id}">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${machine.srNo}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                ${machine.name}
                <div class="text-xs text-gray-500">${machine.make}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${machine.model}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                <span class="capacity-badge">${machine.capacity}</span>
                ${machine.specifications ? `<div class="text-xs text-gray-500 mt-1">${machine.specifications}</div>` : ''}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${machine.location}</td>
        </tr>
    `).join('');
}

// Populate Critical Machines Section - ONLY TEXT COLOR CHANGED TO WHITE
function populateCriticalMachines() {
    const criticalMachinesContainer = document.getElementById('critical-machines');
    const criticalMachines = machinesData.filter(machine => machine.isCritical);
    
    if (!criticalMachinesContainer) return;
    
    criticalMachinesContainer.innerHTML = criticalMachines.map(machine => `
        <div class="machine-card critical-machine bg-[#0f172a]">
            <div class="flex flex-col lg:flex-row gap-6 ">
                <div class="lg:w-2/5">
                    <div class="machine-image-container  rounded-lg flex items-center justify-center h-48">
                        ${machine.image ? 
                            `<img src="${machine.image}" alt="${machine.name}" class="machine-image w-full h-full object-cover" onerror="handleImageError(this, '${machine.name}')">` :
                            `<div class="text-gray-400 text-center">
                               <img src="./Img/hydraulic-press-machine-500x500.webp" alt="${machine.name}" class="machine-image w-full h-full object-cover" onerror="this.style.display='none'">
                            </div>`
                        }
                    </div>
                </div>
                <div class="lg:w-3/5">
                    <h4 class="text-xl font-bold text-white mb-2">${machine.name} - ${machine.model}</h4>
                    <div class="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                            <span class="font-semibold text-gray-300">Make:</span>
                            <span class="text-white ml-2">${machine.make}</span>
                        </div>
                        <div>
                            <span class="font-semibold text-gray-300">Capacity:</span>
                            <span class="text-white ml-2">${machine.capacity}</span>
                        </div>
                        <div>
                            <span class="font-semibold text-gray-300">Location:</span>
                            <span class="text-white ml-2">${machine.location}</span>
                        </div>
                        <div>
                            <span class="font-semibold text-gray-300">Specifications:</span>
                            <span class="text-white ml-2">${machine.specifications}</span>
                        </div>
                    </div>
                    <p class="text-white text-sm leading-relaxed">${machine.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Handle image loading errors
function handleImageError(img, machineName) {
    console.log(`Image not found for ${machineName}: ${img.src}`);
    img.style.display = 'none';
    const container = img.parentElement;
    const fallbackHTML = `
        <div class="text-gray-400 text-center p-4">
            <svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <div>${machineName}</div>
            <div class="text-xs mt-1">Image not available</div>
        </div>
    `;
    container.innerHTML = fallbackHTML;
}

// Add Event Listeners
function addEventListeners() {
    const tableRows = document.querySelectorAll('[data-machine-id]');
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            const machineId = this.getAttribute('data-machine-id');
            const machine = machinesData.find(m => m.id == machineId);
            if (machine) {
                if (machine.isCritical) {
                    document.getElementById('critical-machines').scrollIntoView({ 
                        behavior: 'smooth' 
                    });
                }
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMachinesPage);
} else {
    initializeMachinesPage();
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { machinesData, initializeMachinesPage };
}